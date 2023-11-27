# Input

The program accepts user input through interactive elements on the graphical user interface. Specifically, users can input data in two distinct sections: 'Add City' and 'Add Country'. In 'Add City', users provide city names and associated countries. In 'Add Country', users supply country names and their respective currencies.

# Process

Upon receiving the input, the program uses event handlers to manage the data. When a new city or country is added, the program invokes functions that update the application's state. For cities, `addCity` integrates the new city into the cities array, while `addCountry` appends the new country to the countries list. Both functions assign unique identifiers to entries using `uuid`.

# Output

The updated lists are rendered on their respective screens. The 'Cities' tab displays a list of all cities added, and the 'Countries' tab shows all countries with their currencies. If no entries exist, a centered message prompts the user to add new items.
