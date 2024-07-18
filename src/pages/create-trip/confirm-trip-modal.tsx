import { Plus, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2>Trip confirmation</h2>
            <button type='button' onClick={closeConfirmTripModal}>
              <X className='sixe-5 text-zinc-400'/>
            </button>
          </div>

          <p className='text-sm text-zinc-400'>
            To create the new trip to <span className='font-semibold text-zinc-100'>Florianopolis, Brasil</span> on the <span className='font-semibold text-zinc-100'>16th to 24th of September 2024</span> fill up the form below:
          </p>
        </div>

        <form onSubmit={createTrip} className='space-y-3'>
          <div className='flex-1  h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='text-zinc-400 size-5' />
            <input
              name='name'
              placeholder="Type your full name"
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
            />
          </div>

          <div className='flex-1  h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='text-zinc-400 size-5' />
            <input
              type="email"
              name='email'
              placeholder="Type your personal e-mail"
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Create trip
            <Plus className='size-4'/>
          </Button>
        </form>
      </div>
    </div>
  )
}
