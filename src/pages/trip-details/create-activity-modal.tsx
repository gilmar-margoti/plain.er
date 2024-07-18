import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal
} : CreateActivityModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2>Create activity</h2>
            <button type='button' onClick={closeCreateActivityModal}>
              <X className='sixe-5 text-zinc-400'/>
            </button>
          </div>

          <p className='text-sm text-zinc-400'>
            All the guests can visualize the activities.
          </p>
        </div>

        <form className='space-y-3'>
          <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <Tag className='text-zinc-400 size-5' />
            <input
              name='title'
              placeholder="What is the activity about?"
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
            />
          </div>

          <div className="flex items-center gap-2">
            <div className='h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <Calendar className='text-zinc-400 size-5' />
              <input
                type="datetime-local"
                name='occurs_at'
                placeholder="Date and time"
                className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]'
              />
            </div>
          </div>

          <Button variant="primary" size="full">
            Save activity
          </Button>
        </form>
      </div>
    </div>
  )
}