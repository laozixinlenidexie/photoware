import Mock from "mockjs"
import image from "@/mock/image.json"
Mock.mock("/mock/image",{
    code:200,
    data:image,
});

export default Mock
