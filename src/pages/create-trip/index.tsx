import { FormEvent, useState } from 'react'
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { useNavigate } from "react-router-dom";
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';

export function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(['gilmar.mmj@outlook.com']);

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return
    if (emailsToInvite.includes(email)) return

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailsFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/123')
  }
  return (
    <div className="h-screen flex items-center justify-center bg-texture-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full p-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="Logo plann.er" />
          <p className="text-lg text-zinc-300">Invite your friends and plan your next trip!</p>
        </div>

        <div className='space-y-4'>
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              openGuestsModal={openGuestsModal}
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          When planning your trip with plann.er automatically you agree <br />
          with our <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="">privacy policy</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailsFromInvite={removeEmailsFromInvite}
          addNewEmailToInvite={addNewEmailToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  )
}
