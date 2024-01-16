import { comments } from "../data";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const comment = comments.find((comment) => comment.id === parseInt(id));

  return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const { text } = body;

  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(params.id));

  comments[commentIndex].text = text;

  return Response.json(comments[commentIndex]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(params.id));

  const deletedComment = comments[commentIndex];

  comments.splice(commentIndex, 1);

  return Response.json(deletedComment);
}
