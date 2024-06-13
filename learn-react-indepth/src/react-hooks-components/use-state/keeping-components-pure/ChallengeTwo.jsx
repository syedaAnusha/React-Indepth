/* eslint-disable react/prop-types */
export default function ChallengeTwo({ stories }) {
  let displayArray = stories.slice();
  displayArray.push({
    id: "create",
    label: "Create Story",
  });

  return (
    <ul className="text-white">
      {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}
