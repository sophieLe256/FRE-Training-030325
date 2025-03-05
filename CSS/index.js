const h1element = document.querySelectorAll("[class^='container']");
h1element.forEach((element) => {
  element.style.color = "red";
});

/* 
Type selectors (e.g., h1) and pseudo-elements (e.g., ::before).

Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"], [id=“id”]) and pseudo-classes (e.g., :hover).
ID selectors (e.g., #example).

Universal selector (*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity. (The selectors declared inside :not() do, however.)
 */