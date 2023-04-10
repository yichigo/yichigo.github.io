/* General styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 1rem;
  padding: 1rem;
}

/* Header */
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

header h1 {
  margin-bottom: 0.5rem;
}

header h2 {
  margin-bottom: 1rem;
}

/* Navigation links */
nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
}

nav ul li {
  margin-right: 1rem;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  padding: 5px;
  transition: background-color 0.3s;
}

nav ul li a:hover {
  background-color: #555;
}

/* Sections */
section {
  padding: 2rem;
}

section h2 {
  margin-bottom: 1rem;
}

/* Skills */
#tutorials ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

#tutorials ul li {
  background-color: #f4f4f4;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

/* Contact */
#contact p {
  margin-bottom: 1rem;
}
