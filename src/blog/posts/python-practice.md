---
layout: layouts/post.njk 
title: "The How-To of how I Made a To-Do List"
category: coding practice
excerpt: "In this blog post, I reflect on the process of creating a small to-do list program in Python."
date: 2026-07-11
permalink: "/blog/{{ page.fileSlug }}/"
---

In this blog post, I reflect on my experience constructing a small weekly to-do list program in Python, and how the project helped me to relearn and practice the programming language through problem solving and experimentation.  

As a college student, life is packed with assignments, work, meetings, activities, and other personal obligations. With this, I have become what I call a “chronic Google Calendar user.” Google Calendar is essentially my life line, helping me to keep track of all the things I need to do. I would seriously be so lost without it. 

At the same time, I had just joined a research lab that uses Python, when I hadn’t touched Python in over a year. To get comfortable with Python again, I was tasked to create a small program. Since I’m so dependent on Google Calendar, I was inspired to create my own version. 

I quickly realized that calendaring would be way more advanced than my skill set and also went beyond the scope of the assignment. I scaled back my idea into something more manageable. I decided to create a weekly to-do list, where a user could input a task, and the program would organize tasks by day and time. 

Even this smaller project had its own challenges. I had to relearn Python while also asking myself a surprisingly difficult question: How in the world do I make a computer understand chronological order? Through the review of old course notes, trial and error, and a lot of debugging, I was able to successfully create a small-scale weekly to-do list which accomplished exactly what I set out to build.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**How Does the Program Work for the User?**

Before I walk through my process, I wanted to give a brief overview of what the program actually does. Once the program is run, it gives the user four options, to “Add Task”, “Remove Task”, “View Tasks”, or “Quit”. If a user selects “Add Task”, they are then prompted to input a day, time, category, and description for a new task that will be added to the to-do list. If they select “Remove Task”, all of the tasks will be listed in numerical order, chronologically by day and time. The user then selects the task number they want to remove, and that task is removed. If the user selects “View Tasks”, the tasks are written out in numerical order, chronologically. If they choose to “Quit”, the program stops running. The repository for the program is available [here](https://github.com/kconley-ct/DIG_small_program).   
**Why a Weekly To-Do List?**

Before I wrote any code, I first had to decide what program I wanted to create. Initially, I wanted to create a program that resulted in something like Google Calendar. After more consideration, I realized that creating a full scale calendar was likely beyond my current skill level and was certainly beyond the task I was assigned of creating a simple program. Features such as recurring events, notifications, and drop-down menus were just a little much for what this assignment was. 

With this, I reduced my project into something a bit more manageable: a weekly to-do list. The program would prompt a user to input a task, providing a day of the week, time, category, and description. In reducing the project, I was able to focus on relearning Python without being overwhelmed trying to build something overly complex. At the same time, this project still required lots of problem solving in addition to numerous Python concepts, such as loops, lists, dictionaries, etc. 

**How in the World Do I Sort Tasks?**

While I did face multiple challenges in doing this, the absolute biggest challenge that I encountered was how to organize tasks in chronological order. Python would not automatically know that “Monday” comes before “Tuesday” or that “11am” is before “2pm”. To Python, these are all just strings, and not indicators of time. To solve the problem of day order, I created a dictionary that assigned each day of the week to a numeric value. 

```python
# creating variables for the numbers associated with each day
day_order = {"MONDAY": 0,
             "TUESDAY": 1, 
             "WEDNESDAY": 2, 
             "THURSDAY": 3, 
             "FRIDAY": 4, 
             "SATURDAY": 5, 
             "SUNDAY": 6}
```

This allowed Python to sort tasks in day order based on numbers, instead of words. 

Then, I had to solve another problem: time. Users could enter times such as “11am” and “2pm”, but Python doesn’t know what am means as opposed to pm and the colons within times such as “1:30pm” also created a problem. With this, I created a function that took times as an input and converted them into the number of minutes after midnight. You might be asking, “Kiersten, why didn’t you just have the user enter military time? It would have been easier that way?” And while yes, that is correct, the intended user of this program is me. I do not use military time, ever. Instead I write my times like “2:45pm”, so with that, this sorting was needed. 

```python
def convertTime(time_str: str) -> int: 
   """
   Converts times (such as 12pm and 1:30pm) into an integer value for the number of minutes after midnight
   :param time_str: (str) User inputed time 
   :return: (int) Number of minutes after midnight
   >>> convertTime(2pm)
   840
   """
   time_str = time_str.strip().lower() # breaks down the characters and makes everything lower case (if not already)

   # spliting am and pm
   if "am" in time_str: # if it's a morning time
      period = "am"
      time_str = time_str.replace("am", "") # takes out am
   else: # if it's an afternoon time
       period = "pm"
       time_str = time_str.replace("pm", "") # takes out pm
       
   # hour/minute handling
   if ":" in time_str: # if theres a colon
      hour, minute = time_str.split(":") # splits minutes and hours
   else: # when there's no minutes
      hour = time_str
      minute = "0"

   hour = int(hour)
   minute = int(minute)

   if period == "pm" and hour != 12: # for pm times
      hour += 12
   elif period == "am" and hour == 12: # for am times
      hour = 0

   return (hour * 60 + minute) # number of hours * 60 minutes + number of minutes
```

Once day and time had numerical values, I was able to have my program sort tasks, chronologically. 

**Relearning Python Through Trial-and-Error**

Because I hadn’t touched Python in over a year, I found myself constantly reviewing old notes and assignments from a previous course. Even simple concepts, such as loops, took a bit of time and practice to remember. I was reminded that you often don’t get programming “right” on the first try. I spent a lot of time debugging issues such as: 

* Indentation errors  
* Sorting tasks   
* Other formatting errors

Although annoying at times, debugging was probably the most important skill of this project. As I approach larger scale problems in this lab, the ability to persevere and problem solve will be highly important. 

Building this weekly to-do list was a small project, but it accomplished exactly what it needed to do; it helped me become comfortable with Python again. By simplifying my original idea of making a Google Calendar dupe into a manageable weekly to-do list, I was able to practice essential programming concepts such as loops, lists, dictionaries, and functions. 

**\_\_\_\_\_\_\_\_\_\_\_\_\_**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Going Forward**

Creating this program did exactly what I needed it to do: I was able to acclimate back to Python in a very low stakes fashion. I think the biggest lesson I learned was that programming isn’t really about creating the most perfect code; but rather, it’s about breaking big ideas/problems into smaller ones, and then taking those small solutions and bringing them together into something bigger. 

Coming into this, I felt a bit intimidated. As I move forward in my time with DIG, I think this experience will allow me to feel more confident and less overwhelmed, as I remember the lessons I learned from this small scale project.   