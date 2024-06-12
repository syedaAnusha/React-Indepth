/* eslint-disable react/prop-types */
export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <main className="flex justify-center items-center m-3">
      <section>
        <ul className="flex gap-2 text-center">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="border-2 border-cyan-600 p-2 rounded-md w-64"
            >
              <button
                onClick={() => {
                  onSelect(contact.id);
                }}
              >
                {contact.id === selectedId ? (
                  <b>{contact.name}</b>
                ) : (
                  contact.name
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
