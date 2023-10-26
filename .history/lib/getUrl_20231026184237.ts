import { storage } from "@/appwrite";
import { TImage } from "@/typings";

const getUrl = async (image: TImage) => {
  const url = storage.getFilePreview(image.bucketId, image.filedId);
returnurl
};
export default getUrl;
