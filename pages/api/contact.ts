// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient} from "mongodb";
import {aws} from "@aws-sdk/util-endpoints/dist-types/lib";

type Data = {
    message: string
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {

        try {
            const DB_NAME = 'contact';
            const client = await MongoClient.connect(`mongodb+srv://ckrbqja:ckrbqja@cluster0.owpyhzxconte.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);

            const db = client.db();
            await db.collection('messages').insertOne(req.body);
        } catch (e) {
            res.status(500).json({message: '오류'})
            return;
        }


        res.status(200).json({message: req.body});
    }
}
