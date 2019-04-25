https://hasura.io/
Instant realtime GraphQL on Postgres | Hasura GraphQL Engine

I fumbled about a bit, but getting this going was as :easy_button: as:
```$ cf login --sso
$ cf target -o sandbox-gsa -s bret.mogilefsky
$ cf push hasura-demo -c 'graphql-engine --database-url $DATABASE_URL serve --server-port $PORT' --docker-image hasura/graphql-engine --health-check-type none --no-start
$ cf set-env hasura-demo HASURA_GRAPHQL_ENABLE_CONSOLE true
$ cf create-service aws-rds medium-psql hasura-db
<...wait a while for the DB to be fully available...>
$ cf bind-service hasura-demo hasura-db
$ cf start hasura-demo
$ open https://hasura-demo.app.cloud.gov```





You need to set up some-role-in-your-db appropriately.

Bret Mogilefsky (18F | SF | he/him)   [1 day ago]
In my case, I haven't yet, so I get this at https://postgrest-demo.app.cloud.gov:
```{"hint":null,"details":null,"code":"22023","message":"role \"some-role-in-your-db\" does not exist"}```

$  curl -L `curl https://api.github.com/repos/postgrest/postgrest/releases/latest 2>/dev/null |  jq -r '.assets[] | select(.browser_download_url | contains("ubuntu.tar")) | .browser_download_url' ` | tar xz\n
$  curl https://raw.githubusercontent.com/PostgREST/postgrest-heroku/master/env-to-config > env-to-config
$  chmod +x postgrest env-to-config
$  cf push postgrest-demo -b binary_buildpack -c 'DB_URI=${DATABASE_URL} DB_ANON_ROLE=some-role-in-your-db DB_SCHEMA=public ./env-to-config ./postgrest postgrest.conf' --health-check-type none --no-start
$ cf bind-service postgrest-demo hasura-db
$cf start postgrest-demo



https://github.com/18F/cf-ex-drupal8