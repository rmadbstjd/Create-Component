export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }

          return mentor;
        }),
      };
    }
    case "added": {
      const { addName, addTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: addName, title: addTitle }],
      };
    }
    case "deleted": {
      const { deleteName } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => {
          if (deleteName !== mentor.name) {
            return mentor;
          }
        }),
      };
    }

    default: {
      throw Error(`Unknown Action type...${action.type}`);
    }
  }
}
