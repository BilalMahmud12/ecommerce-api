import { Request, Response } from "express";
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    const { name, slug, category, description, price, stock, images } = req.body;
    try {
        const product = new Product({ name, slug, category, description, price, stock, images });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: "Error creating product", error });
    }
};