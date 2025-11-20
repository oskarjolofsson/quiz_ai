from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
from django.conf import settings

class PromptView(APIView):
    def post(self, request):
        prompt = request.data.get("prompt")

        if not prompt:
            return Response(
                {"error": "Prompt required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        client = OpenAI(api_key=settings.OPENAI_API_KEY)

        prompt = f"""
        Answer this prompt clearly and with just some sentences: {prompt}
        """

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        feedback = response.choices[0].message.content
        return Response({"feedback": feedback}, status=200)
