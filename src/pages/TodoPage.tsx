
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Loader2, LogOut } from "lucide-react";
import { fetchTodos, addTodo, updateTodoStatus, deleteTodo, Todo } from "@/services/todoService";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AuthForm from "@/components/auth/AuthForm";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setIsAuthenticated(!!session);
        
        if (event === 'SIGNED_IN' && session) {
          loadTodos();
        } else if (event === 'SIGNED_OUT') {
          setTodos([]);
        }
      }
    );

    // Check current auth status
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
      
      if (data.session) {
        loadTodos();
      } else {
        setLoading(false);
      }
    };
    
    checkUser();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      toast({
        title: "Error loading todos",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() === "") return;
    
    try {
      setSubmitting(true);
      const todo = await addTodo(newTodo);
      setTodos([todo, ...todos]);
      setNewTodo("");
      toast({
        title: "Task added",
        description: "Your new task has been added successfully.",
      });
    } catch (error) {
      toast({
        title: "Error adding task",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleTodo = async (id: string, completed: boolean) => {
    try {
      await updateTodoStatus(id, !completed);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      );
    } catch (error) {
      toast({
        title: "Error updating task",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      toast({
        title: "Task deleted",
        description: "Your task has been deleted successfully.",
      });
    } catch (error) {
      toast({
        title: "Error deleting task",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !submitting) {
      handleAddTodo();
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
  };

  const handleAuthSuccess = () => {
    loadTodos();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {isAuthenticated ? (
          <>
            <div className="flex justify-end mb-4 max-w-md mx-auto">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-gray-800">
                  Todo List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  <Input
                    placeholder="Add a new task..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                    disabled={submitting}
                  />
                  <Button 
                    onClick={handleAddTodo} 
                    disabled={submitting || newTodo.trim() === ""}
                  >
                    {submitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Add"
                    )}
                  </Button>
                </div>

                <div className="space-y-3">
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : todos.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">
                      No tasks yet. Add one above!
                    </p>
                  ) : (
                    todos.map((todo) => (
                      <div
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-white border rounded-md shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={todo.completed}
                            onCheckedChange={() => handleToggleTodo(todo.id, todo.completed)}
                            id={todo.id}
                          />
                          <label
                            htmlFor={todo.id}
                            className={`text-sm ${
                              todo.completed ? "line-through text-gray-400" : "text-gray-700"
                            }`}
                          >
                            {todo.title}
                          </label>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteTodo(todo.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <AuthForm onAuthSuccess={handleAuthSuccess} />
        )}
      </div>
    </div>
  );
};

export default TodoPage;
