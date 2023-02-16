import Project from './models';
import { dbConnect } from './connection';

export default async function handler(req, res) {
  await dbConnect();

  const { projectId } = req.query;

  const project = await Project.findById(projectId);

  res.status(200).json(project);
}
