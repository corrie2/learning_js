function ask(question,yes,no){
  if (confirm(question)) yes();
  else no();
};

ask(
  "do you agree?",
  yes => alert("ok:"),
  no => alert("no")
);
