import prisma from "../services/prisma";
import { Request, Response } from "express";

export async function createPost(req: Request, res: Response) {
    try {
        const { titulo, conteudo } = req.body;        
        const novoPost = await prisma.post.create({
            data: { titulo, conteudo }
        });
        console.log(novoPost)
        res.status(201).json(novoPost);
    }
    catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }

}

export async function getPost(req: Request, res: Response) {
    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    }
    catch (err) {
        res.status(500).json({ message: "Erro ao listar posts" });
    }
}

export async function updatePost(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { titulo, conteudo, publicado } = req.body;

    try {
        const updatedPost = await prisma.post.update({
            where: { id: id },
            data: { titulo, conteudo, publicado },
        });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: "Erro ao atualizar post" })
    }
}

export async function deletePost(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        const deletedPost = await prisma.post.delete({
            where: { id: id },
        });
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(500).json({ message: "Erro ao excluir post" })
    }
}