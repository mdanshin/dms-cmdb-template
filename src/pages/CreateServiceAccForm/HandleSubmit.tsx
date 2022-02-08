export default function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      fullname: data.get('fullname'),
      login: data.get('login'),
      email: data.get('email'),
      domain: data.get('domain'),
      responsible: data.get('responsible'),
      deputy: data.get('deputy'),
      fullnameEng: data.get('fullnameEng'),
      appointment: data.get('appointment'),
      allowExternalEmails: data.get('allowExternalEmails'),
      passwordLeack: data.get('passwordLeack'),
    });
  };