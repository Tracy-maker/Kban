import { storage } from "@/appwrite";

const getUrl = async (image: Image) => {
  const url = storage.getFilePreview(image.bucketId, image.filedId);
};
export default getUrl;
