// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient} from "mongodb";

type Data = {
    message: string
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {

        try {
            const DB_NAME = process.env.mongodb_database;
            const client = await MongoClient.connect(process.env.mongodb_connect_url + '');

            const db = client.db();
            await db.collection('messages').insertOne(req.body);
        } catch (e) {
            res.status(500).json({message: '오류'})
            return;
        }


        res.status(200).json({message: req.body});
    }
}
