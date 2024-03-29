import { Request, Response, text } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(req: Request, res: Response) {
    const { admin_id, text, user_id } = req.body;

    const messagesService = new MessagesService();
    try {
      const message = await messagesService.create({ admin_id, text, user_id });
      return res.json(message);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async showByUser(req: Request, res: Response) {
    const { id } = req.params;
    const messagesService = new MessagesService();
    const list = await messagesService.listByUser(id);

    return res.json(list);
  }
}

export { MessagesController };
