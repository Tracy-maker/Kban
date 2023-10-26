import { storage } from "@/appwrite";
import { TImage } from "@/typings";

const getUrl = async (image: TImage) => {
  const url = storage.getFilePreview(image.bucketId, image.filedId);
  return url;
};
export default getUrl;
