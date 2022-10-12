# CSS NOTES FROM LECTURE

What does CSS stand for? **Cascading Style Sheets**

* This is a way to style our HTML
* Controls the presentation and styling of our webpage

## Types of CSS

There are 3 ways to write CSS:

1. External <-- Best practice
2. Internal
3. Inline <-- Don't do this, bad practice

## Structure of CSS

```css
selector{
  property: value; /* (these property/value pairs are called a declaration) */
  property: value;
  property: value;
  property: value;
}
```

## Selectors

There are multiple ways you can select the HTML element(s) you want to modify:

* By element name:
  
  * ```css
    p{
      color: red;
    }

    section{
      background-color: bisque;
    }

* By `class` value with `.`
  
  * ```css
    .name-of-class{
      color: green;
    }

* By `id` value with `#`

  * ```css
    #name-of-id{
      background-color: red;
    }
