'use client';

export const saveCharacterToDB = async (
  id: string,
  state: PrismaJson.CharacterState
) => {
  return await fetch('/api/saveCharacter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, state }),
  });
};

export const saveImageToCharacter = async (
  id: string,
  image: string
): Promise<Response> => {
  return await fetch('/api/saveCharacterImage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, image }),
  });
};
