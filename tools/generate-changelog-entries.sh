#!/bin/bash
function escape_newlines {
  perl -pe 's/\n/\\n/g'
}

function escape_quotes {
  perl -pe 's/\"/\\"/g'
}

function git_pretty_format_for_hash {
  echo "$(git log -n1 --pretty=format:$1 $2)"
}

function format {
  abbreviated_commit=$(git_pretty_format_for_hash "%h" $1)
  subject=$(git_pretty_format_for_hash "%s" $1)
  body=$(git_pretty_format_for_hash "%b" $1 | escape_newlines | escape_quotes)
  authorName=$(git_pretty_format_for_hash "%cN" $1)
  authorEmail=$(git_pretty_format_for_hash "%cE" $1)
  authorDate=$(git_pretty_format_for_hash "%cD" $1)

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
for hash in $(git rev-list master)
do
	format $hash
done
echo "]}"
