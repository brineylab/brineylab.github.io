---
layout: page
permalink: /code/
title: code
# description: Visit us on <a href='https://github.com/brineylab'>GitHub</a> to see all of our code and repositories, and on <a href='https://huggingface.co/brineylab'>HuggingFace</a> to see our models.
nav: true
nav_order: 4
---

<!-- {% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %} -->

<!-- ## GitHub Repositories -->

Visit us on [GitHub](https://github.com/brineylab) to see the rest of our code, and on [HuggingFace](https://huggingface.co/brineylab) to download/use our models.

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
