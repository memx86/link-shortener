Link shortening application.

1. The application consists of two actions:

   • First action takes as input a link that needs to be saved, writes it to the database, generates a token and returns a quick link

   • Second action is called when following a quick link with a token and redirects to the original link. at the same time, it records the number of hits on this link in the database.

2. Each temporary link is valid for 30 days.

3. The short link token must be random, unique, consisting of numbers and letters (different case) with a length of 6 characters.
