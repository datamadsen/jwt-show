# git log --pretty=format:'# %s %n<span class="byline">by %an on %ad</span>%n%n%b%n' --date=format:'%Y-%m-%d' > temp
git log --pretty=format:'# %s %n<span class="byline"><a href="https://github.com/tmadsen/jwt-show/commit/%H">%h</a> by %an on %ad</span> %n%n%b<hr>' --date=format:'%B %d %Y' > temp.log
perl Markdown.pl temp.log > temp.markdown
perl -pe 's/{CHANGELOG}/`cat temp.markdown`/ge' changelog/template.html > changelog/index.html
rm temp*
