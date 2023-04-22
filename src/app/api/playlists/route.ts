import type { NextApiRequest,NextApiResponse } from "next"

const handler =  (req:NextApiRequest,res:NextApiResponse)=>{
    res.status(200).json('Mahi I  Love U Morethan anything in this wrld');
};

export default handler;