import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Bạn là trợ lý AI cho Nguyễn Tân Thành.
Thông tin:
- Tên: Nguyễn Tân Thành
- Nghề nghiệp: Graphic Designer, Web Developer, Digital Marketer.
- Phong cách: Sáng tạo, kỹ thuật, chiến lược.
- Dịch vụ: Branding, Logo, UI/UX, Web Dev (Next.js/React), SEO, Marketing.
- Liên hệ: Khuyên người dùng điền form hoặc gửi email contact@nguyentanthanh.com.

Trả lời ngắn gọn, thân thiện, xưng là "mình" (đại diện Thành) hoặc "AI của Thành".
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  const ai = new GoogleGenAI({ apiKey: apiKey || '' });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response = await chat.sendMessage({ message });
    return response.text || "Xin lỗi, mình không nghe rõ. Bạn nói lại nhé?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hệ thống đang bận, vui lòng thử lại sau.";
  }
};