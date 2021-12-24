# Daily Scheduler

> This application can be used to record a summary of the day's important events and catalog a list of tasks 
> Like a personal journal and a to-do-list 

<img src = "https://github.com/sameerad2001/DailyScheduler_Server/blob/master/img/Demo.gif" alt = "Website Demo"/>

### Brief overview of how the application works

- This is a typical client-server application 
- The express server is RESTful (but does not allow for the deletion of all the documents at once)
- The client uses React but does not use Redux (made the process of state synchronization a headache) 
- The client makes API calls to the server for the following 
    - Creation of a new schedule 
    - .....
    - And everything else
- When a schedule is deleted it does infact get deleted from the actual "collection" (mongoDB) but a copy is saved to another "collection" 
    - This seemed like a great idea but I did not implement a way to recover this deleted schedule so this step is completely useless

### Demo

- Add, View, Edit, Delete and Filter schedules
    - <img src = "https://github.com/sameerad2001/DailyScheduler_Server/blob/master/img/Demo1.png" alt = "Website Demo"/>
    - <img src = "https://github.com/sameerad2001/DailyScheduler_Server/blob/master/img/Demo2.png" alt = "Website Demo"/>


### Bugs 
- If the text in the description does not have enough space it will extend the width of the card (looks ugly)
- The filter by title and date way not always work

<hr>

Sameer Ahmed <br/>
Email : <sameerad2001@gmail.com> <br/>
Linkdin : <https://www.linkedin.com/in/sameer-ahmed-0b7902176/>