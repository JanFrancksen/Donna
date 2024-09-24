import { logger } from '@repo/logger';
import { createClient } from '@repo/supabase/server';
import type { TablesUpdate } from '../types';

export async function updateUser(userId: string, data: TablesUpdate<'users'>) {
  const supabase = createClient();

  try {
    const result = await supabase.from('users').update(data).eq('id', userId);

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}