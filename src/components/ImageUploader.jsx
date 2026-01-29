import { useRef } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const ImageUploader = ({ label, value, onChange }) => {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result?.toString() || "");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-700">{label}</p>
      <div
        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            inputRef.current?.click();
          }
        }}
      >
        <PhotoIcon className="h-10 w-10 text-slate-400" />
        <div>
          <p className="text-sm font-medium text-slate-700">
            {value ? "Replace photo" : "Upload photo"}
          </p>
          <p className="text-xs text-slate-500">PNG or JPG up to 5MB</p>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {value && (
        <img
          src={value}
          alt="Preview"
          className="h-44 w-full rounded-2xl object-cover"
        />
      )}
    </div>
  );
};

export default ImageUploader;
