
import { supabase } from "@/integrations/supabase/client";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  user_id?: string;
  created_at?: string;
  updated_at?: string;
}

// Fetch all todos for the current user
export const fetchTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }

  return data || [];
};

// Add a new todo
export const addTodo = async (title: string): Promise<Todo> => {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, completed: false }])
    .select()
    .single();

  if (error) {
    console.error("Error adding todo:", error);
    throw error;
  }

  return data;
};

// Update a todo's completed status
export const updateTodoStatus = async (id: string, completed: boolean): Promise<void> => {
  const { error } = await supabase
    .from("todos")
    .update({ completed, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
