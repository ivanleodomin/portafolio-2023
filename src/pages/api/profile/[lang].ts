// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
type Data = {
	msg: string;
};

const profiles: {[type: string]: string} = {
	es: 'CV - Ivan Dominguez - software developer.pdf',
	en: 'Profile - Ivan Dominguez - software developer.pdf',
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const {lang} = req.query;

	if (!lang) return res.status(400).send({msg: 'Invalid language'});

	const profileName = profiles[lang as string];

	const filePath = path.join(process.cwd(), `/public/files/${profileName}`);
	const stat = fs.statSync(filePath);

	res.setHeader('Content-Disposition', `attachment; filename=${profileName}`);
	res.setHeader('Content-Type', 'application/octet-stream');
	res.setHeader('Content-Length', stat.size);
	const stream = fs.createReadStream(filePath);
	return stream.pipe(res);
}
