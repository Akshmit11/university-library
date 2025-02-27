const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    upstash: {
      redisRestUrl: process.env.UPSTASH_REDIS_REST_URL!,
      redisRestToken: process.env.UPSTASH_REDIS_REST_TOKEN!,
      qstashUrl: process.env.UPSTASH_QSTASH_URL!,
      qstashToken: process.env.UPSTASH_QSTASH_TOKEN!,
    },
    resendToken: process.env.RESEND_TOKEN!,
  },
};

export default config;