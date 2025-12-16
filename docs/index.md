---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Home

hero:
  name: "CP125 Python Programming 2"
  text: "Course and Lab Information"
  tagline: Structured Python Labs and Exercises
  actions:
    - theme: brand
      text: Course Informations
      link: /course/course
    - theme: alt
      text: Mobile Editor
      link: /editor-mobile.html

features:
  - title: Course Informations
    details: Complete course overview including assessment breakdown, weekly schedules, learning objectives, and grading criteria to help you succeed in CP115 Python Programming
  - title: Python Editor
    details: Interactive Python coding environment with syntax highlighting, instant execution, and mobile-friendly interface for practicing programming exercises anywhere
---


<CodeGroup>
<CodeGroupItem title="Python" active>

```python
print("Hello, World!")
```

</CodeGroupItem>

</CodeGroup>




<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Aiman-Haris.png',
    name: 'Muhammad Aiman Haris',
    title: 'Lecturer',
    org : 'Kolej Matrikulasi Labuan',
    desc : 'I have several years of experience in teaching programming using isPython, Java and JavaScript. If you have any questions, please don\'t hesitate to reach out via the link below. Enjoy the course!',
    links: [
      {icon : 'whatsapp', link :'https://wasap.my/+60143294625'},
      { icon: 'gmail', link: 'mailto:bm-3570@moe-dl.edu.my' },
      { icon: 'github', link: 'https://github.com/Aiman-Haris' }
      
    ]
  },

]
</script>

<br>
<br>
<br>
<br>


# Course Lecturer

<VPTeamMembers size="small" :members />
