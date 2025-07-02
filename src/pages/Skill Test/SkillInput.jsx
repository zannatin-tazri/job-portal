import React, { useState } from 'react';

const SkillInput = ({ onChange }) => {
  const [input, setInput] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (input && !skills.includes(input)) {
      const updated = [...skills, input.trim()];
      setSkills(updated);
      onChange(updated);
      setInput('');
    }
  };

  const handleRemoveSkill = (skill) => {
    const updated = skills.filter(s => s !== skill);
    setSkills(updated);
    onChange(updated);
  };

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Add a skill (e.g., React)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
        />
        <button className="btn btn-primary bg-purple-700 text-white" onClick={handleAddSkill}>Add</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="badge badge-outline badge-primary">
            {skill}
            <button onClick={() => handleRemoveSkill(skill)} className="ml-2 text-red-600">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillInput;
