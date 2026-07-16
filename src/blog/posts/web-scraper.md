---
layout: layouts/post.njk
title: "Collecting Data In Bulk Using Web Scraper"
category: research
excerpt: This post describes how I turned address information from the Federal Bureau of Prisons website into a usable dataset by collecting facility links, scraping address details, cleaning missing entries, and converting the final results into geocoded data for analysis.
date: 2025-07-09
permalink: "/blog/{{ page.fileSlug }}/"
---

This post will introduce how I used a web scraper from a Chrome extension to collect links and extract addresses from the Federal Bureau of Prisons website. Afterwards, the data was cleaned, validated, and turned into a usable dataset for our project in which we are building a big data pipeline.

When I looked for datasets for class projects in the past, they were often easily available: either I go to websites like [Kaggle.com](http://Kaggle.com), or the professor provides links where data can be downloaded in a second. However, getting data in the real world is a bit more challenging. In this project, my task was to look for datasets under specific topics, where data is not always available in a ready-to-use format.

Take federal facilities' addresses as an example. They are clearly listed on the [Federal Bureau of Prisons website](https://www.bop.gov/locations/), but not in a dataset format. The format of these pages is consistent, but it is time-consuming to click into each of them and retrieve the information needed. Fortunately, this was a good opportunity to practice web scraping. The data size was enough to apply an automatic pipeline, but not too big to handle if errors occurred during scraping. To keep the process simple, I tried Google Chrome extensions, which could be applied in web pages right away.

---

## **1\. Plan the Scraping Workflow**

![Image alt text](/assets/img/blog-posts-web-scraper/web-scraper-img-1.png)

[Image source: author](https://www.bop.gov/locations/list.jsp)

![Image alt text](/assets/img/blog-posts-web-scraper/web-scraper-img-2.png)

[Image source: author](https://www.bop.gov/locations/institutions/ald/)

Although my approach was already mentioned in the intro above, I checked how the website was structured before making that decision. The page lists the facilities in six columns, with more than 20 rows in each column, as shown in the yellow box. Each facility is linked to an information page that contains the specific address of that facility, as shown in the red box. All pages use the same template, where the address is shown in the same position along with other information. The consistent format makes the website suitable for scraping, as scrapers can retrieve data from pages that follow the same pattern.

At this point, the task can be specified into two parts:

1. Collect all facility names and their corresponding links.
2. Go through each link and extract the address from the facility information page.

## **2\. Collect the Facility Links**

I tried several different Chrome extensions. The first one, [Web Scraper](https://chromewebstore.google.com/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn?pli=1), only allowed me to select entries row by row, which was not ideal because I would still need to repeat the process too many times. Another extension called [Ultimate Web Scraper](https://chromewebstore.google.com/detail/ultimate-web-scraper/pdeldjlcnhallaapdggcmhpailpnnkmg) was able to extract links by column. This still required some repetitive work, but the amount of manual effort was acceptable. Here is an example of the scraping result for the first column:

![Image source: author (Note: When I tried to retrieve this table two weeks later, it was no longer accessible. Therefore, remember to save your data in a safe place and be careful when using these free tools!)](/assets/img/blog-posts-web-scraper/web-scraper-img-3.png)

Something was off. Instead of maintaining two clean columns, the output contained an extra two-column section with a few entries and links mixed in. However, the results looked mostly correct. I pasted the results from all six columns into a spreadsheet and manually moved the misplaced rows back into position. At this stage, the goal was not to make everything perfect immediately. I just needed a clean enough list of facility links to move to the next step. Everyone's definition of "clean enough" will be different. I used my own best judgement.

## **3\. Extract Info from Each Page and Validate**

After cleaning the list of links, I input the links into the web scraper again to automatically go through each link. The first page popped up, where I could select the container on the page and tell the scraper which section to collect. Besides the address, I also asked the scraper to collect the prison type and description in case they were needed later. Eighty percent of the addresses were successfully extracted, and I wanted to check whether the result made sense.

The Federal Bureau of Prisons website provides statistics on the number of federal facilities. Since I was only interested in institutions, the final spreadsheet should contain 122 rows after excluding offices and other non-institution locations. The prison type column became very helpful here because it showed which category each location belonged to. I also attached the classification dictionary in the first tab of the spreadsheet for future reference. This is also part of the purpose of this blog post: it is easy to forget the why and how when you are doing the work, so keeping records helps when you need to revisit the task.

After cleaning the data, the number of rows dropped from 130 to 98\. Something was clearly missing.

## **4\. Look for the Missing Entries**

This irregularity reminded me of the misplaced rows that appeared when I was collecting the links. After taking another look, I realized that these entries were Federal Correctional Complexes, or FCCs. FCCs contain multiple institutions under the same complex. This explains why the issue happened during link collection: when clicking these entries, the user is not directed to one single institution page.

Fortunately, the web scraper was still useful in this situation. This time, I used it to collect all links listed at the bottom of each FCC page in the area of the orange box.

![Image alt text](/assets/img/blog-posts-web-scraper/web-scraper-img-2.png)

[Image source: author](https://www.bop.gov/locations/search.jsp?q=FCC+Allenwood&name=Allenwood&facilityType=FCC)

Then I repeated the same process:

1. collect institution links from the FCC pages;
2. input those links into the scraper;
3. extract address, prison type, and description;
4. clean the output in the spreadsheet.

Each institution still followed the same page format, so the workflow remained largely unchanged.

In the end, I generated a separate spreadsheet containing all FCC institutions and their addresses, similar to the cleaned spreadsheet created earlier.

## **5\. Final Check and Next Steps**

After merging the two tabs, the total number of rows increased to 122, which matched the expected count. There are still missing addresses for around 10 facilities, but I filled them in by hand. Since the number was small, manual correction was faster than spending more time adjusting the scraper.

To verify the results, I randomly selected several rows and compared the addresses with the information shown on the website. The addresses matched correctly. Now, the [spreadsheet](https://docs.google.com/spreadsheets/d/1E9W_Q2aakvvzf1rNuK2lyQWPFl3pCG6FUUXfMoHQ0k8/edit?usp=sharing) contained the full list of federal institutions and their addresses.

The final step was to convert the addresses into longitude and latitude coordinates. This would make the dataset easier to use for mapping, distance calculation, and other spatial analysis later. There are helpful extensions in Google Sheets that can turn addresses into geographic coordinates. In the end, I had a dataset with geocodes for all federal facilities.

---

## **Conclusion**

In this post, I walked through how I arranged a list of information that was only available to check one by one into a usable dataset. The process started with inspecting the website structure, collecting subpage links, and then extracting information from each page using a web scraper. Some problems occurred during this process. For example, one type of facility, FCC, consists of multiple locations, which caused inconsistencies between the number of locations collected and the expected count.

The problems were fixed manually, and this experience demonstrated that web scraping is a helpful approach for similar tasks in the future. However, as the density of information and the size of data vary depending on the topic, it is worth spending more time customizing the web scraper and making it more aligned with our needs.
