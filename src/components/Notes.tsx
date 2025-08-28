"use client";

// import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"; // ✅ from shadcn
import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// If you have a Label component elsewhere, update the path accordingly, e.g.:
import { Label } from "@radix-ui/react-label";
// Or use a simple label element in the JSX if you don't have a Label component

import initialData from "../data/notes";
import Note from "./Note";

const Notes = () => {
  const [notes, setNotes] = useState(initialData);
  const [name, setName] = useState("");
  const [thoughts, setThoughts] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !thoughts.trim()) return;

    const newNote = {
      id: notes.length + 1,
      name,
      thoughts,
      updated: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setName("");
    setThoughts("");
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Add Note Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="self-start">+ Add Note</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add a new note</DialogTitle>
            <DialogDescription>
              Fill in the details and submit to create a new note.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="thoughts">Thoughts</Label>
              <Input
                id="thoughts"
                placeholder="What's on your mind?"
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button type="submit">Save Note</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Render Notes */}
      {notes.map((note) => (
        <div
          key={note.id}
          className="w-full shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition-shadow duration-300"
        >
          <Note
            id={note.id}
            name={note.name}
            thoughts={note.thoughts}
            date={new Date(note.updated).toLocaleString()}
          />
        </div>
      ))}
    </div>
  );
};

export default Notes;
