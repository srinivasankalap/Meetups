import {MongoClient} from 'mongodb';

async function handler(req, res){
    if (req.method==='POST'){
        const data=req.body;
        const {title, image, address, description}=data;
        const client = await MongoClient.connect('mongodb+srv://First:Cnu7997563693@cluster0.fgvz9og.mongodb.net/meetups?retryWrites=true&w=majority')
        const db=client.db();
        const meetupsCollection=db.collection('meetups');
        const result=await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: 'MEETUP INSERTED'});
    }
}

export default handler;