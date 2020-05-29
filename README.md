# Cypress.io 

- [webinar - part 1](https://www.facebook.com/infoshareacademy/videos/559972424930641/)
- [webinar - part 2](https://www.facebook.com/infoshareacademy/videos/204639773851281/)


Cześć, w tym repo znajdziesz kod, który powstał w czasie webinaru na temat testów automatycznych w Cypress 🙂

## Część pierwsza

🎥 [Nagranie Webinaru](https://www.facebook.com/infoshareacademy/videos/559972424930641/) 

🎬 [YouTube](https://www.youtube.com/watch?v=SDqda0K09R4&feature=youtu.be)

📄 [Prezentacja w .pdf](https://github.com/infoshareacademy/2020-04-28_webinar_Cypress/blob/master/Cypress%20-%20Webinar%202020.pdf)

## Część druga

🎥 [Nagranie Webinaru](https://www.facebook.com/infoshareacademy/videos/204639773851281/) 

🎬 Coming soon!

📄 [Prezentacja w .pdf](https://github.com/infoshareacademy/2020-04-28_webinar_Cypress/blob/part_2/Cypress%20czesc%202.pdf)



### Jak uruchomić testy

- najpiew pobierz lub sklonuj to repozytorium 
- następnie w tym katalogu wykonaj polecenie:  
```bash
    npm install
```
- następnie uruchom Cypress (aby uruchomić w domyślnej przeglądarce)
``` bash
    npm run cypress:open:dev
```
lub 
``` bash
    npm run cypress:open:prod
```


Można też uruchomić w trybie `headless`:
```bash 
    npm run cypress:headless
```

### Jak uruchomić aplikacje

W repo są dwie aplikacje, lepiej uruchamiać jedną na raz :) 
Jeśli nie masz zainstalowanego 'http-server' uruchom polecenie:
```bash
    npm install -g http-server
```

- ToDoMVC
    ```bash
      cd todoApp
      http-server -c-1
    ```
  
- requestApp
    ```bash
      cd requestApp
      http-server -c-1   
    ```


#### Dodatkowe informacje

Polecam zapoznać się z dokumentacją Cypress, jest ona dosyć obszerna i zawiera wiele informacji, np: 
- [Wyszukiwanie elementów na stronie](https://docs.cypress.io/api/commands/get.html)
- [Best practises](https://docs.cypress.io/guides/references/best-practices.html)
- [Asercje](https://docs.cypress.io/guides/references/assertions.html)
- [Best practises - filmik](https://www.youtube.com/watch?v=5XQOK0v_YRE)
