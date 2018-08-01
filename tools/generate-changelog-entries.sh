#!/bin/bash
function escape_newlines {
  sed ':a;N;$!ba;s/\n/\\n/g'
}

function escape_quotes {
  sed 's/\"/\\"/g'
}

function git_pretty_format_for_hash {
  echo $(git log -n1 --pretty=format:$1 $2)
}

function format {
  abbreviated_commit=$(git_pretty_format_for_hash "%h" $1)
  subject=$(git_pretty_format_for_hash "%s" $1)
  body=$(git_pretty_format_for_hash "%b" $1 | escape_quotes | escape_newlines)
  authorName=$(git_pretty_format_for_hash "%aN" $1)
  authorEmail=$(git_pretty_format_for_hash "%aE" $1)
  authorDate=$(git_pretty_format_for_hash "%aD" $1)

	RESULT=$(cat <<-END
{
  "abbreviated_commit": "$abbreviated_commit",
  "subject": "$subject",
  "body": "$body",
  "author": {
    "name": "$authorName",
    "email": "$authorEmail",
    "date": "$authorDate"
  }
},
	END
	)
	echo "$RESULT"
}

echo "export const Changes = { commits: ["
for hash in $(git rev-list --all)
do
	format $hash
done
echo "]}"
