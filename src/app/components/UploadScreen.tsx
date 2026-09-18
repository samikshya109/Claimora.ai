import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { Upload, FileText, FileSpreadsheet, Mail, CheckCircle2, X, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Header } from "./Header";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
}

export function UploadScreen() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedFiles) {
      try {
        setFiles(JSON.parse(savedFiles));
      } catch (error) {
        console.error('Error loading saved files:', error);
      }
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(Array.from(e.dataTransfer.files));
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
  }, []);

  const addFiles = (newFiles: File[]) => {
    const uploaded: UploadedFile[] = newFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    const updated = [...files, ...uploaded];
    setFiles(updated);
    localStorage.setItem('uploadedFiles', JSON.stringify(updated));
    toast.success(`${newFiles.length} file${newFiles.length > 1 ? 's' : ''} added`);
  };

  const removeFile = (id: string) => {
    const updated = files.filter(f => f.id !== id);
    setFiles(updated);
    localStorage.setItem('uploadedFiles', JSON.stringify(updated));
    toast.info("File removed");
  };

  const handleAnalyze = () => {
    if (files.length === 0) {
      toast.error("Please upload at least one file to start the analysis");
      return;
    }
    toast.success("Starting case analysis...");
    setTimeout(() => navigate("/analyze"), 500);
  };

  const getFileIcon = (filename: string) => {
    if (filename.endsWith('.csv')) return FileSpreadsheet;
    if (filename.endsWith('.eml')) return Mail;
    return FileText;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#111827] mb-2 tracking-tight">
            {files.length > 0 ? 'Add more evidence' : 'Upload your evidence'}
          </h1>
          <p className="text-[#6b7280]">
            {files.length > 0
              ? `You have ${files.length} file${files.length > 1 ? 's' : ''} ready. Add more or continue to analysis.`
              : 'Drop in billing records, emails, EHR files, or any documentation of potential fraud'
            }
          </p>
        </div>

        {/* Drop zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`bg-white border-2 border-dashed rounded-xl p-10 sm:p-14 mb-6 text-center transition-all ${
            isDragging
              ? 'border-[#0d9488] bg-teal-50'
              : 'border-[#e5e7eb] hover:border-[#9ca3af]'
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className={`rounded-full p-4 ${isDragging ? 'bg-teal-100' : 'bg-[#f3f4f6]'}`}>
              <Upload className={`w-8 h-8 ${isDragging ? 'text-[#0d9488]' : 'text-[#9ca3af]'}`} />
            </div>
          </div>
          <p className="text-base font-medium text-[#374151] mb-1">
            Drag and drop files here, or{' '}
            <label className="text-[#0d9488] hover:text-[#0f766e] cursor-pointer underline underline-offset-2 font-semibold transition-colors">
              browse
              <input
                type="file"
                multiple
                onChange={handleFileInput}
                className="hidden"
                accept=".csv,.txt,.eml,.pdf,.doc,.docx"
              />
            </label>
          </p>
          <p className="text-sm text-[#9ca3af]">
            CSV, TXT, EML, PDF, DOC, DOCX supported
          </p>
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="mb-8 space-y-2">
            <h2 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-3">
              Uploaded files ({files.length})
            </h2>
            {files.map(file => {
              const Icon = getFileIcon(file.name);
              return (
                <div
                  key={file.id}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#d1d5db] transition-colors shadow-sm"
                >
                  <div className="bg-teal-50 rounded-lg p-2 flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#0d9488]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#111827] truncate text-sm sm:text-base">{file.name}</p>
                    <p className="text-xs text-[#9ca3af]">{formatFileSize(file.size)}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-[#f0fdf4] text-[#16a34a] rounded-full text-xs font-semibold border border-[#bbf7d0]">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      Uploaded
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#16a34a] sm:hidden" aria-label="Uploaded" />
                    <button
                      onClick={() => removeFile(file.id)}
                      className="text-[#d1d5db] hover:text-[#d4183d] transition-colors flex items-center justify-center rounded-lg"
                      style={{ minWidth: 44, minHeight: 44 }}
                      aria-label={`Remove ${file.name}`}
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={files.length === 0}
          className="w-full bg-[#0d9488] text-white rounded-lg font-semibold hover:bg-[#0f766e] transition-all shadow-sm hover:shadow-md disabled:bg-[#e5e7eb] disabled:text-[#9ca3af] disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
          style={{ minHeight: 52 }}
        >
          {files.length === 0 ? 'Upload files to continue' : 'Analyze case'}
          {files.length > 0 && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
        </button>

        {files.length === 0 && (
          <p className="text-center text-sm text-[#9ca3af] mt-3">
            Upload at least one file to begin
          </p>
        )}
      </main>
    </div>
  );
}
