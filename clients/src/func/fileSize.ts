let maxSize = 2 * 1024 * 1024; // 2MB tính bằng byte

// Kiểm tra kích cỡ của file tải lên.
export const isFileSizeValid = (file: File): boolean => {
  return file.size <= maxSize;
}