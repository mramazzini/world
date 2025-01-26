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
