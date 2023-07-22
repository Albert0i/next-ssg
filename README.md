## SSG and ISR

<div style="text-align: center; color:white; background-color:black; font-size: small;">
</div>


### Prologue
甘龍曰：「不然。聖人不易民而教，知者不變法而治。因民而教，不勞而成功；緣法而治者，吏習而民安之。」衛鞅曰：「龍之所言，世俗之言也。常人安於故俗，學者溺於所聞。以此兩者居官守法可也，非所與論於法之外也。三代不同禮而王，五伯不同法而霸。智者作法，愚者制焉；賢者更禮，不肖者拘焉。」

杜摯曰：「利不百，不變法；功不十，不易器。法古無過，循禮無邪。」衛鞅曰：「治世不一道，便國不法古。故湯武不循古而王，夏殷不易禮而亡。反古者不可非，而循禮者不足多。」
[《史記‧商君列傳》](https://ctext.org/shiji/shang-jun-lie-zhuan/zh)

### I. Terminology
- SSR - Server-Side Rendering
- CSR - Client-Side Rendering.
- SSG - Static Site Generation
- ISR - Incremental Static Regeneration

[TL;DR](https://www.merriam-webster.com/dictionary/TL%3BDR)

At the very moment when a URL is entered or a hyperlink is clicked on a client browser, a HTTP request is fired and zigzagging on it ways till the end point is hit. HTTP server receives and resolves the resource, examine and execute code/scripts inside. Massages the result with boilerplates, generates HTML and send back to the client along with meta data. Typically, code/script execution means pulling data from external databases. 

As you can see, all works are done on server, and is called *Server Side Rendering*. SSR is the traditional way of most of the classic web application behave. [PHP](https://www.php.net/) and [ASP.NET Web Forms](https://learn.microsoft.com/en-us/aspnet/web-forms/) are import milestones. Server, per se, should be powerful enough and equipped with many modules/plugins or drivers of software or even hardware. 

Another approach is like this, whenever a request is hit on the end point. A *barebone* HTML attendant with [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) code are sent back to client browser. Forthwith, the code takes control and subsequent HTTP requests are sent to [API Gateway](https://microservices.io/patterns/apigateway.html) for necessary resources. Data are returned to client browser again and be merged with the barefone and display as HTML content. 

Typically, this process is known as [Hydration](https://en.wikipedia.org/wiki/Hydration_(web_development)). The data to be return is in [json](https://www.json.org/json-en.html) format. 

As you may see, there are two servers, the first one serves static files which can be hosted on low-end HTTP server such as [nginx](https://nginx.org/en/). API Gateway is responsible for database manipulation and serves with [REST API](https://restfulapi.net/). Client code invokes API call but doesn't perceive what database it's running on. This is called *Client Side Rendering*. CSR is the contemporary way of most of the single-page application behave. Code can be written in pure javascript or more on using [jQuery](https://jquery.com/), or even on front end frameworks such as [React](https://react.dev/), [Vue](https://vuejs.org/) or [Angular](https://angularjs.org/).

So far so good... It is said that "If benefit doesn't reach hundred fold, don't change the law; If performance doesn't meet ten times, don't change the tool.". Everythng has a cost, cost, in terms of web applications, it means time versus money. We can achieve the goal of fast response time but low hardware investment and vice versa. 


### II. SSG
>In the realm of database, data are treated in different ways. Data, per se, can be divided into transactional and non-transactional. Code tables, such as employee names, product categories, site/location addresses, are typical non-transactional and be always referenced by transactional data. Since they are infrequently changed, caching code tables lest round-tripping to backend database again and again for the same set of data can be a performance boost especially for tight budget system.
[check this out](https://github.com/Albert0i/yrunner-on-node/blob/main/README.V2.md)



### III. ISR


### V. Summary
[Live demo](https://next-ssg.onrender.com/)


### V. Reference
1. [What is CSR SSR SSG and ISR](https://youtu.be/YkxrbxoqHDw)
2. [Next.js 13: complete guide to Server Components and the App Directory](https://makerkit.dev/blog/tutorials/nextjs13)
3. [Next.js: The Ultimate Guide to SSR and SSG in React](https://medium.com/womenintechnology/next-js-the-ultimate-guide-to-ssr-and-ssg-in-react-245598d765c3)
4. [NextJS | getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)
5. [NextJS | getStaticPaths](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths)
6. [Incremental Static Regeneration (ISR) In Next.Js](https://blog.openreplay.com/incremental-static-regeneration-in-nextjs/)
7. [The Facts in the Case of M. Valdemar](https://poemuseum.org/the-facts-in-the-case-of-m-valdemar/)


### Epilogue 
```

```


### EOF (2023/07/28)
