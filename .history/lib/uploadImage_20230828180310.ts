import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUpload = await storage.files.create(
    "64e5f70622cf73ef8cec",
    ID.unique(),
    file
  );
  return fileUpload;
};
export default uploadImage;
