"use client";

import { useRef, useState } from "react";
import {
  fieldErrorClass,
  fieldInputClass,
  fieldLabelClass,
} from "@/components/forms/formStyles";
import { cn } from "@/lib/cn";

const DEFAULT_ACCEPT_MIME = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "image/heic",
  "image/heif",
];

type FileUploadFieldProps = {
  id: string;
  label: string;
  maxFiles: number;
  maxFileBytes: number;
  maxTotalBytes: number;
  acceptMimeTypes?: readonly string[];
  acceptExtensions: string;
  error?: string;
  onFilesChange: (files: File[]) => void;
  pendingBackendNote: string;
};

function isAcceptedType(file: File, mimeTypes: readonly string[]): boolean {
  if (mimeTypes.includes(file.type)) return true;
  const name = file.name.toLowerCase();
  return (
    name.endsWith(".jpg") ||
    name.endsWith(".jpeg") ||
    name.endsWith(".png") ||
    name.endsWith(".pdf") ||
    name.endsWith(".heic") ||
    name.endsWith(".heif")
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FileUploadField({
  id,
  label,
  maxFiles,
  maxFileBytes,
  maxTotalBytes,
  acceptMimeTypes = DEFAULT_ACCEPT_MIME,
  acceptExtensions,
  error,
  onFilesChange,
  pendingBackendNote,
}: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [localError, setLocalError] = useState<string | undefined>();

  function updateFiles(next: File[]) {
    setFiles(next);
    onFilesChange(next);
  }

  function validateAndAdd(incoming: FileList | null) {
    if (!incoming?.length) return;

    const next = [...files];
    let totalBytes = next.reduce((sum, file) => sum + file.size, 0);

    for (const file of Array.from(incoming)) {
      if (next.length >= maxFiles) {
        setLocalError(`You may attach up to ${maxFiles} files.`);
        return;
      }
      if (!isAcceptedType(file, acceptMimeTypes)) {
        setLocalError("Accepted formats: JPG, PNG, PDF, and HEIC.");
        return;
      }
      if (file.size > maxFileBytes) {
        setLocalError("Each file must be 10 MB or less. Total upload must be 50 MB or less.");
        return;
      }
      if (totalBytes + file.size > maxTotalBytes) {
        setLocalError("Each file must be 10 MB or less. Total upload must be 50 MB or less.");
        return;
      }
      next.push(file);
      totalBytes += file.size;
    }

    setLocalError(undefined);
    updateFiles(next);
    if (inputRef.current) inputRef.current.value = "";
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setLocalError(undefined);
    updateFiles(next);
  }

  const displayError = error ?? localError;

  return (
    <div>
      <label htmlFor={id} className={fieldLabelClass}>
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type="file"
        multiple
        accept={acceptExtensions}
        className={cn(fieldInputClass, "cursor-pointer file:mr-3 file:border-0 file:bg-transparent file:text-small")}
        onChange={(e) => validateAndAdd(e.target.files)}
      />
      <p className="mt-2 text-caption text-muted-subtle">{pendingBackendNote}</p>
      {files.length > 0 ? (
        <ul className="mt-(--spacing-stack-md) space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}-${index}`}
              className="flex items-center justify-between gap-3 border border-border bg-surface px-3 py-2 text-small text-muted"
            >
              <span className="min-w-0 truncate">
                {file.name} ({formatBytes(file.size)})
              </span>
              <button
                type="button"
                className="shrink-0 text-foreground underline decoration-border-strong underline-offset-4 hover:text-accent"
                onClick={() => removeFile(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {displayError ? <p className={fieldErrorClass}>{displayError}</p> : null}
    </div>
  );
}
